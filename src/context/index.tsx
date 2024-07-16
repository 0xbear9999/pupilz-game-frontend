import { WalletProviders } from "./WalletProviders";
import { SoundProvider } from "./SoundContext";
import { ReactNode } from "react";

export const CombinedProviders: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <WalletProviders>
      <SoundProvider>{children}</SoundProvider>
    </WalletProviders>
  );
};
