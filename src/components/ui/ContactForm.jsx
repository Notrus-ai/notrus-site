import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react'

export default function ContactForm({ 
  title = "Entre em contato", 
  description = "Preencha o formulário e entraremos em contato",
  ctaText = "Enviar mensagem",
  variant = "default" // default, demo, calculator
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      })
    }, 3000)
  }

  const generateWhatsAppMessage = () => {
    const message = `Olá! Vim do site da Notrus e gostaria de saber mais sobre automação de WhatsApp.

*Dados:*
Nome: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Telefone: ${formData.phone}

${formData.message ? `Mensagem: ${formData.message}` : ''}`

    return encodeURIComponent(message)
  }

  const handleWhatsAppContact = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/5511999999999?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Mensagem enviada!
          </h3>
          <p className="text-gray-600 mb-4">
            Entraremos em contato em até 2 horas úteis.
          </p>
          <Button 
            onClick={handleWhatsAppContact}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Falar agora no WhatsApp
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome completo *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="company">Empresa</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nome da empresa"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">WhatsApp</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
            />
          </div>
          
          {variant === 'default' && (
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Como podemos ajudar?"
                rows={3}
              />
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          
          <div className="text-center">
            <Button
              type="button"
              onClick={handleWhatsAppContact}
              className="w-full mt-2"
            >
              Ou fale direto no WhatsApp
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

