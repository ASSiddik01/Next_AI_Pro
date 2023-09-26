import ThemeRegistry from "@/theme/ThemeRegistry";
import { ClerkProvider } from "@clerk/nextjs";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <ThemeRegistry>{children}</ThemeRegistry>
    </ClerkProvider>
  );
};

export default Providers;
