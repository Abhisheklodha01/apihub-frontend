import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import axios from "axios";
import { backendUrl } from "@/utils/server";
import { userContex } from "@/context/userContex";
import { useNavigate } from "react-router-dom";

export const EmailVerification = () => {
  const { user } = React.useContext(userContex);
  const navigate = useNavigate();
  const [otp, setOtp] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [timeLeft, setTimeLeft] = React.useState<number>(30);
  const [isActive, setIsActive] = React.useState<boolean>(true);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${backendUrl}/users/verify-otp`,
        {
          email: user?.email,
          verificationCode: otp,
        },

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setLoading(false);
      navigate("/user-profile");
      toast.success(data.message, {
        position: "top-center",
      });
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  const handleResendOTP = async () => {
    if (isActive) {
      return;
    }
    try {
      setIsActive(true);
      setTimeLeft(30);
      const { data } = await axios.post(
        `${backendUrl}/users/resend-otp`,
        {
          email: user?.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message, {
        position: "top-center",
      });
    } catch (error: any) {
      setTimeLeft(10);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);
  return (
    <div className="min-h-screen dark">
      <div className="pb-40"></div>
      <div className="ml-3 mr-3">
        <div className="max-w-md w-full mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border border-slate-700">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Verify your email
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            please check your email we have sent the verification code
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Verification code</Label>
              <Input
                name="otp"
                id="otp"
                placeholder="enter verification code"
                type="text"
                value={otp}
                required
                maxLength={6}
                disabled={loading === true}
                onChange={(e) => setOtp(e.target.value)}
              />
            </LabelInputContainer>
            <div className="mb-4 font-semibold -mt-2 flex justify-between">
              <button onClick={handleResendOTP} className=" text-blue-600">
                Resend OTP?
              </button>
              <p className="text-white">
                <span className="text-sm">Resend OTP after:</span>{" "}
                {isActive ? timeLeft : "00:00"}
              </p>
            </div>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              {loading ? (
                <div
                  className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-slate-100 rounded-full"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only"></span>
                </div>
              ) : (
                <p>Verify Email &rarr;</p>
              )}
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
