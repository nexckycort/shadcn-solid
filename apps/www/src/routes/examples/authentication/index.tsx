import { cn } from "@/lib/cn"
import { buttonVariants } from "@/registry/default/ui/button"
import { A } from "@solidjs/router"
import { UserAuthForm } from "./components/user-auth-form"

const Authentication = () => {
  return (
    <>
      <div class="md:hidden">
        <img
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          class="block dark:hidden"
        />
        <img
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          class="hidden dark:block"
        />
      </div>
      <div class="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <A
          href="/examples/authentication"
          class={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </A>
        <div class="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
          <div class="absolute inset-0 bg-zinc-900" />
          <div class="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div class="relative z-20 mt-auto">
            <blockquote class="space-y-2">
              <p class="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer class="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div class="lg:p-8">
          <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div class="flex flex-col space-y-2 text-center">
              <h1 class="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p class="text-muted-foreground text-sm">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p class="text-muted-foreground px-8 text-center text-sm">
              By clicking continue, you agree to our{" "}
              <A
                href="/terms"
                class="hover:text-primary underline underline-offset-4"
              >
                Terms of Service
              </A>{" "}
              and{" "}
              <A
                href="/privacy"
                class="hover:text-primary underline underline-offset-4"
              >
                Privacy Policy
              </A>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Authentication
