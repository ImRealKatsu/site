import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function TermsOfService() {
    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Termos de Serviço</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>1. Aceitação dos Termos</AccordionTrigger>
              <AccordionContent>
                Ao acessar e usar este curso, você concorda em cumprir e estar vinculado a estes Termos de Serviço.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. Uso do Conteúdo</AccordionTrigger>
              <AccordionContent>
                Todo o conteúdo fornecido neste curso é apenas para fins educacionais. Você não pode reproduzir, distribuir ou vender qualquer parte do conteúdo sem permissão expressa.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. Política de Reembolso</AccordionTrigger>
              <AccordionContent>
                Todas as vendas são finais. Não oferecemos reembolsos para este curso.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>4. Isenção de Responsabilidade</AccordionTrigger>
              <AccordionContent>
                Este curso não garante resultados financeiros específicos. Seu sucesso depende de vários fatores, incluindo sua dedicação, circunstâncias financeiras e condições de mercado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>5. Modificações dos Termos</AccordionTrigger>
              <AccordionContent>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. É sua responsabilidade verificar periodicamente quaisquer alterações.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    )
  }
  
  