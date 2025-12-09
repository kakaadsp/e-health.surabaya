import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    nik: "",
    nomorPonsel: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Kata sandi tidak cocok",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate registration
    setTimeout(() => {
      toast({
        title: "Registrasi Berhasil",
        description: "Silakan login dengan akun baru Anda",
      });
      navigate("/login");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-md">
          <div className="ehealth-card-teal p-8 md:p-12 animate-scale-in">
            <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
              Daftar
            </h1>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-primary font-semibold mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="ehealth-input"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">
                  NIK
                </label>
                <input
                  type="text"
                  name="nik"
                  value={formData.nik}
                  onChange={handleChange}
                  className="ehealth-input"
                  placeholder="Masukkan NIK (16 digit)"
                  maxLength={16}
                  required
                />
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="ehealth-input"
                  placeholder="Masukkan email"
                  required
                />
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">
                  Nomor Ponsel
                </label>
                <input
                  type="tel"
                  name="nomorPonsel"
                  value={formData.nomorPonsel}
                  onChange={handleChange}
                  className="ehealth-input"
                  placeholder="Masukkan nomor ponsel"
                  required
                />
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="ehealth-input"
                  placeholder="Masukkan kata sandi"
                  required
                />
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="ehealth-input"
                  placeholder="Konfirmasi kata sandi"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full ehealth-btn-primary disabled:opacity-50 mt-6"
              >
                {isLoading ? "Loading..." : "Daftar"}
              </button>

              <p className="text-center text-sm text-muted-foreground">
                Sudah Punya Akun?{" "}
                <Link to="/login" className="text-primary font-semibold hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
