import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
    return (
        <main className="flex flex-col gap-6 w-full min-h-[80vh] justify-center animate-float pointer-events-auto" style={{ animationDuration: '8s' }}>

            {/* Header Greeting */}
            <header className="flex flex-col items-center mb-6 text-center">
                <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 tracking-tight">
                    TRUCampPro
                </h1>
                <p className="text-white/60 text-sm mt-2 max-w-[250px]">
                    Sign in to access your football camp dashboard.
                </p>
            </header>

            {/* Login Module */}
            <section className="w-full">
                <LoginForm />
            </section>

        </main>
    );
}
