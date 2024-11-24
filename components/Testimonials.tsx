import Image from 'next/image'
import { Star, StarHalf } from 'lucide-react'

const testimonials = [
  { 
    name: "Ana Silva", 
    role: "Ex-CLT, agora Empreendedora", 
    image: "https://images.unsplash.com/photo-1632318676766-a64e84632e31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlc3NvYXN8ZW58MHx8MHx8fDA%3D", 
    quote: "Este curso superou todas as minhas expectativas! Saí de um salário CLT de R$8.000 para faturar R$35.000 por mês com meu próprio negócio. Transformou completamente minha vida financeira!", 
    rating: 5,
    income: "R$35.000/mês"
  },
  { 
    name: "Carlos Oliveira", 
    role: "Investidor e Consultor Financeiro", 
    image: "https://images.unsplash.com/photo-1712189142408-39a2e77645d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D", 
    quote: "As estratégias que aprendi me permitiram sair do CLT e hoje faturo mais de R$50.000 mensais com meus investimentos. O curso é excelente, mas seria ótimo ter mais aulas ao vivo para tirar dúvidas em tempo real.", 
    rating: 4.5,
    income: "R$50.000+/mês"
  },
  { 
    name: "Mariana Santos", 
    role: "Empresária Digital", 
    image: "https://images.unsplash.com/photo-1652476959529-737ff4a82ecb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8", 
    quote: "Troquei meu emprego CLT por um negócio online. Hoje faturo 15x mais e tenho tempo para minha família. O conteúdo é incrível, mas poderia ter mais estudos de caso práticos.", 
    rating: 4,
    income: "R$60.000/mês"
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        if (i < Math.floor(rating)) {
          return <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
        } else if (i === Math.floor(rating) && !Number.isInteger(rating)) {
          return <StarHalf key={i} className="text-yellow-400 w-5 h-5 fill-current" />
        } else {
          return <Star key={i} className="text-gray-400 w-5 h-5" />
        }
      })}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-green-400">Histórias de Sucesso</h2>
        <p className="text-xl text-center mb-12">Veja como nossos alunos transformaram suas vidas saindo do CLT</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-700 p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} className="rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-green-400">{testimonial.role}</p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
              <p className="italic my-4">{testimonial.quote}</p>
              <p className="text-green-400 font-bold">Renda Atual: {testimonial.income}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

