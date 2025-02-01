import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Linkedin, ZapZap } from "./iconscontatos";
import { useState } from "react";
import Spinner from "@/components/elements/spinner";

const EnvioDeEmail = ({ className = "" }) => {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    setSending(true);
    const { email, assunto, mensagem } = data;
    const emailData = {
      from_name: email,
      to_name: "caiosilvestre.dev@gmail.com",
      subject: assunto,
      message: mensagem,
    };

    try {
      const response = await emailjs.send(
        "service_5uce6t2",
        "template_k1q3fwq",
        emailData,
        "c1fHZafuFe_-If0j6"
      );
      response.text === "OK"
        ? (toast.success(
            "E-mail enviado com sucesso. Logo entratrei em contato.😊"
          ),
          setSending(false))
        : (toast.error(
            "Ops, desculpe ocorreu um erro. Se preferir, é possível entrar em contato por Whatsapp ou Linkedin.😊"
          ),
          setSending(false));
      reset();
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      setSending(false);
    }
  };

  return (
    <div
      className={`container  mt-5 wow animate__animated animate__fadeInDown ${className}`}
    >
      <h3 className=" heading-title mb-2">Envie um e-mail</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="commentform">
        <div className="field-group">
          <div className="field-input ">
            <input
              type="email"
              name="email"
              placeholder="seu e-mail"
              className="form-control form-fields"
              {...register("email", { required: "E-mail é obrigatório" })}
            />
            {errors.email && (
              <div className="text-danger">{errors.email.message}</div>
            )}
          </div>

          <div className="field-input">
            <input
              type="text"
              name="assunto"
              placeholder="assunto"
              className="form-control form-fields"
              {...register("assunto", { required: "Assunto é obrigatório" })}
            />
            {errors.assunto && (
              <div className="text-danger">{errors.assunto.message}</div>
            )}
          </div>
        </div>

        <div className="field-input">
          <textarea
            name="mensagem"
            placeholder="mensagem"
            className="form-control form-fields"
            rows="10"
            {...register("mensagem", { required: "Mensagem é obrigatória" })}
          />
          {errors.mensagem && (
            <div className="text-danger">{errors.mensagem.message}</div>
          )}
        </div>
        <div className="field-submit">
          <button disabled={sending} type="submit" className="button-cs">
            {sending ? <Spinner /> : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default EnvioDeEmail;
