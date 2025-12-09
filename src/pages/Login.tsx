import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login - in real app, connect to backend
    setTimeout(() => {
      if (email && password) {
        toast({
          title: "Login Berhasil",
          description: "Selamat datang di E-Health!",
        });
        navigate("/");
      } else {
        toast({
          title: "Login Gagal",
          description: "Mohon isi semua field",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="ehealth-card-teal p-8 md:p-12 animate-scale-in">
            <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
              Login
            </h1>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-primary font-semibold mb-2">
                  Email/ No. Rekam Medis
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ehealth-input"
                  placeholder="Masukkan email atau No. RM"
                />
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="ehealth-input"
                  placeholder="Masukkan kata sandi"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full ehealth-btn-primary disabled:opacity-50"
              >
                {isLoading ? "Loading..." : "Login"}
              </button>

              <div className="text-center space-y-2">
                <Link to="/forgot-password" className="text-primary text-sm hover:underline">
                  Lupa Kata Sandi?
                </Link>
                <p className="text-sm text-muted-foreground">
                  Belum Punya Akun?{" "}
                  <Link to="/register" className="text-primary font-semibold hover:underline">
                    Daftar
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
