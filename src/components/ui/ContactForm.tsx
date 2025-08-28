import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"
import { contactFormTranslations, ContactFormLang, ContactFormKeys } from "@/utils/translations"

interface ContactFormProps {
  variant?: "default" | "demo" | "calculator"
  language?: "pt" | "en" 
}

export default function ContactForm({
  variant = "default",
  language = "pt"
}: ContactFormProps) {
  const t = (key: ContactFormKeys): string => {
  const lang: "pt" | "en" = language === "en" ? "en" : "pt"
  return contactFormTranslations[lang][key]
}

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = language === "pt" 
      ? `Novo contato de ${formData.name}` 
      : `New contact from ${formData.name}`
    
            const body = `
        ${language === "pt" ? "Nome" : "Name"}: ${formData.name}
        Email: ${formData.email}
        ${language === "pt" ? "Empresa" : "Company"}: ${formData.company}
        ${language === "pt" ? "Telefone" : "Phone"}: ${formData.phone}
        ${language === "pt" ? "Mensagem" : "Message"}: ${formData.message}`        
        window.location.href = `mailto:contact@notrus.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const generateWhatsAppMessage = (): string => {
    let template = t("whatsappMessage")
    return encodeURIComponent(
      template
        .replace("{name}", formData.name)
        .replace("{email}", formData.email)
        .replace("{company}", formData.company)
        .replace("{phone}", formData.phone)
        .replace(
          "{message}",
          formData.message
            ? `${language === "pt" ? "Mensagem" : "Message"}: ${formData.message}`
            : ""
        )
    )
  }

  const handleWhatsAppContact = (): void => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/+447418638908?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("messageSent")}</h3>
          <p className="text-gray-600 mb-4">{t("contactResponse")}</p>
          <Button onClick={handleWhatsAppContact} className="w-full bg-green-600 hover:bg-green-700">
            {t("whatsappNow")}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto shadow-lg border border-gray-200 text-gray-900 my-8">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">{t("fullName")} *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("namePlaceholder")}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">{t("email")} *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("emailPlaceholder")}
              required
            />
          </div>

          <div>
            <Label htmlFor="company">{t("company")}</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t("companyPlaceholder")}
            />
          </div>

          <div>
            <Label htmlFor="phone">{t("whatsapp")}</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("phonePlaceholder")}
            />
          </div>

          {variant === "default" && (
            <div>
              <Label htmlFor="message">{t("message")}</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("messagePlaceholder")}
                rows={3}
              />
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("sending")}
              </>
            ) : (
              <>
                {t("ctaText")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <div className="text-center">
            <Button
              type="button"
              onClick={handleWhatsAppContact}
              className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
            >
              {t("whatsappDirect")}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}