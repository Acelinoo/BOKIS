"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  BranchId,
  BranchConfig,
  BRANCHES,
  DEFAULT_BRANCH_ID,
  isValidBranchId,
} from "@/lib/branches";

interface BranchContextType {
  activeBranch: BranchId;
  branch: BranchConfig;
  setBranch: (id: BranchId) => void;
  isSelectorOpen: boolean;
  openSelector: () => void;
  closeSelector: () => void;
  isInitialized: boolean;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

const STORAGE_KEY = "bokis_branch";

export function BranchProvider({ children }: { children: React.ReactNode }) {
  const [activeBranch, setActiveBranchState] =
    useState<BranchId>(DEFAULT_BRANCH_ID);
  const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // Cek localStorage saat client pertama kali mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && isValidBranchId(saved)) {
        setActiveBranchState(saved);
        setIsSelectorOpen(false);
      } else {
        // Belum pernah memilih cabang atau nilai tidak valid
        // Reset localStorage dan tampilkan modal pemilih cabang
        localStorage.removeItem(STORAGE_KEY);
        setActiveBranchState(DEFAULT_BRANCH_ID);
        setIsSelectorOpen(true);
      }
    } catch (e) {
      console.warn("Gagal membaca preferensi cabang:", e);
      setIsSelectorOpen(true);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const setBranch = useCallback((id: BranchId) => {
    if (!isValidBranchId(id)) return;
    setActiveBranchState(id);
    setIsSelectorOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch (e) {
      console.warn("Gagal menyimpan preferensi cabang:", e);
    }
  }, []);

  const openSelector = useCallback(() => {
    setIsSelectorOpen(true);
  }, []);

  const closeSelector = useCallback(() => {
    // Hanya bisa ditutup jika user sudah pernah memiliki preferensi valid di localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && isValidBranchId(saved)) {
        setIsSelectorOpen(false);
      }
    } catch (e) {
      setIsSelectorOpen(false);
    }
  }, []);

  const branch = BRANCHES[activeBranch] || BRANCHES[DEFAULT_BRANCH_ID];

  return (
    <BranchContext.Provider
      value={{
        activeBranch,
        branch,
        setBranch,
        isSelectorOpen,
        openSelector,
        closeSelector,
        isInitialized,
      }}
    >
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch(): BranchContextType {
  const context = useContext(BranchContext);
  if (!context) {
    return {
      activeBranch: DEFAULT_BRANCH_ID,
      branch: BRANCHES[DEFAULT_BRANCH_ID],
      setBranch: () => {},
      isSelectorOpen: false,
      openSelector: () => {},
      closeSelector: () => {},
      isInitialized: true,
    };
  }
  return context;
}
