"use client";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/form/input";
import PhoneInputBase from "@/components/ui/form/phoneInput";
import { TextAreaField } from "@/components/ui/form/textarea";
import LoadingButton from "@/components/ui/loading-button";
import { ContactFormSchemaStickey } from "@/schema/stickey-form-schema";
import { useInquiryManagementStore } from "@/store/inquiry-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquare, MoveLeft, User, X } from "lucide-react";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";

type ContactFormData = z.infer<typeof ContactFormSchemaStickey>;
const StickyDrawer = () => {
  const { apiCreateInquirySticky, createInquiryStickeyLoading } = useInquiryManagementStore();
  const [isOpen, setIsOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {},
    setValue,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchemaStickey),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    const [countryCode, phoneNumber] = data?.mobile.split("-");

    const formdata = {
      ...data,
      mobile: phoneNumber,
      country_code: countryCode,
    };
    const res = await apiCreateInquirySticky(formdata);
    if (res?.data?.success === true) {
      reset();
      setValue("mobile", "");
      setIsOpen(false);
      enqueueSnackbar(String(res.data?.message || "Inquiry submitted successfully"), {
        variant: "success",
      });
    }
  };

  return (
    <>
      {/* 1. Sticky Button - Orange color & Vertical text */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:flex fixed h-auto py-4 px-2 flex-col right-0 top-1/2 -translate-y-1/2 z-50 bg-primary hover:bg-primary rounded-l-md rounded-r-none transition-all shadow-lg"
      >
        <MoveLeft className="mb-2 text-white" size={18} />
        <h3 className="[writing-mode:sideways-lr] font-medium">Let`s Talk</h3>
      </Button>

      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed left-4 bottom-4 z-50
        w-14 h-14 rounded-full bg-primary shadow-xl
        flex items-center justify-center"
      >
        <MessageSquare className="text-white w-6 h-6" />
      </button>

      {/* 2. Overlay - Sirf tab jab drawer open ho */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 3. Floating Form Card (Not full height) */}
      <div
        className={`fixed right-8 top-1/2 -translate-y-1/2 z-[70] w-[300px] md:w-[380px]  bg-white text-black rounded-2xl shadow-2xl transition-all duration-300 transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="p-4 relative">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-400"
          >
            <X size={20} />
          </button>

          <h2 className="text-xl font-bold mb-3">Send Enquiry</h2>

          <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-full mx-auto"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <TextField
                    name="first_name"
                    control={control}
                    placeholder=""
                    textColor="text-black"
                    labelBgColor="bg-white"
                    label={"First Name"}
                    startIcon={<User className="w-4 h-4 text-gray-800" />}
                  />
                </div>
                <div>
                  <TextField
                    name="last_name"
                    control={control}
                    placeholder=""
                    textColor="text-black"
                    labelBgColor="bg-white"
                    label={"Last Name"}
                    startIcon={<User className="w-4 h-4 text-gray-800" />}
                  />
                </div>
              </div>

              <div>
                <TextField
                  name="email"
                  control={control}
                  placeholder=""
                  type="email"
                  textColor="text-black"
                  labelBgColor="bg-white"
                  label={"Email"}
                  startIcon={<Mail className="w-4 h-4 text-gray-800" />}
                />
              </div>

              <div>
                <div>
                  <PhoneInputBase
                    name="mobile"
                    control={control}
                    label=""
                    textColor="text-black"
                    labelTextColor="text-white"
                    // borderColor="border-gray-300"
                    errorColor="text-red-400 "
                  />
                </div>
              </div>

              <div>
                <TextAreaField
                  name="message"
                  control={control}
                  label="Message"
                  textColor="text-black"
                  labelBgColor="bg-white"
                  labelTextColor="text-black"
                />
              </div>

              <div className="text-center">
                <LoadingButton
                  type="submit"
                  isLoading={createInquiryStickeyLoading}
                  form="contact-form"
                  className="cursor-pointer"
                >
                  Submit
                </LoadingButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StickyDrawer;
