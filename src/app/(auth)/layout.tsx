import { FaBars, FaDesktop } from "react-icons/fa";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Kontainer utama dengan efek latar belakang aurora
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Elemen untuk efek blur di latar belakang */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-6xl mx-auto p-4 lg:px-8 lg:py-4">
          {/* Layout grid responsif: 1 kolom di mobile, 2 kolom di desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Kolom Kiri: Informasi & Fitur */}
            <div className="text-center lg:text-left hidden md:block">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Move Fast. <br /> Break Nothing.
              </h1>
              <div className="mt-12 space-y-8">
                {/* Fitur 1 */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-200 rounded-lg">
                    <FaBars className="text-2xl text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Remove Bottlenecks
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Release testing and approvals are the most common
                      bottleneck for tech, but you can now remove that
                      bottleneck with Hiphops.
                    </p>
                  </div>
                </div>
                {/* Fitur 2 */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-200 rounded-lg">
                    <FaDesktop className="text-2xl text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Access Risk Analysis
                    </h3>
                    <p className="mt-1 text-gray-600">
                      We use machine learning and static analysis to assess
                      risk, summarise code changes, and automate and delegate
                      release management tasks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Kolom Kanan: Form Login/Register */}

            <div className="w-full max-w-md mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
