import { WalletProviders } from "./WalletProviders";
import { SoundProvider } from "./SoundContext";
import { ReactNode } from "react";
import { GameProvider } from "./GameContext";

export const CombinedProviders: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <WalletProviders>
      <SoundProvider>
        <GameProvider>{children}</GameProvider>
      </SoundProvider>
    </WalletProviders>
  );
};
