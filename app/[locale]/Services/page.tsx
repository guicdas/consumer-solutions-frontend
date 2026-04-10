export default function Services() {
	const bancos = [
		"BANCO BPI, SA",
		"BANCO BIC PORTUGUÊS, SA",
		"ABANCA CORPORACIÓN BANCARIA, SA, SUCURSAL EM PORTUGAL",
		"BANCO CTT, SA",
		"BANCO SANTANDER TOTTA, SA",
		"NOVO BANCO, SA",
		"CAIXA GERAL DE DEPÓSITOS, SA",
		"BANKINTER, SA - SUCURSAL EM PORTUGAL",
		"UNION DE CRÉDITOS INMOBILIÁRIOS, S.A., ESTABLECIMIENTO FINANCIERO DE CRÉDITO (SOCIEDAD UNIPERSONAL) - SUCURSAL EM PORTUGAL",
	];
	const infos = [
		"Reclamações dirigidas à CPCDS CONSUMER SOLUTIONS - UNIPESSOAL, LDA podem ser feitas por Email ou da plataforma do Livro de Reclamações (www.livroreclamacoes.pt). Reclamações apresentadas directamente à Entidade de Supervisão (BP)",
		"Meios de Resolução Alternativa de Litigios - Centros de Arbitragem disponibilizados. A CPCDS CONSUMER SOLUTIONS - UNIPESSOAL, LDA tem acordos com dois centros de arbitragem alternativa de conflitos:– Centro de Arbitragem de Conflitos de Lisboa- Nº de adesão 34883; http://www.centroarbitragemlisboa.pt - Centro Nacional de Informação e Arbitragem de Conflitos de Consumo Nº de adesão 4262;  https://www.cniacc.pt/pt/",
		/**Complaints addressed to CPCDS CONSUMER SOLUTIONS – UNIPESSOAL, LDA can be made by Email or through the Complaints Book platform (www.livroreclamacoes.pt);Complaints submitted directly to the Supervisory Entity (BP)
Alternative Dispute Resolution Means - Arbitration Centers provided
CPCDS CONSUMER SOLUTIONS – UNIPESSOAL, LDA has agreements with two alternative dispute resolution arbitration centers:
    Lisbon Conflict Arbitration Center - Membership number 34883; http://www.centroarbitragemlisboa.pt
    National Center for Information and Arbitration of Consumer Conflicts Membership number 4262; https://www.cniacc.pt/pt/ 
	CPCDS CONSUMER SOLUTIONS – UNIPESSOAL, LDA is prohibited from receiving or delivering any amounts related to the formation, execution, and early fulfillment of credit contracts, under the terms of article 46 of Decree Law 81-C/2017 of July 7th, regarding the Legal Regime of Credit Intermediaries. */
	];

	return (
		<>
			<div className="bg-gray-300 text-black flex flex-col text-center gap-15">
				<h1 className="text-3xl" style={{ fontWeight: "bolder" }}>
					Intermediário de Crédito em Portugal
				</h1>
				{/* <h2 className="text-white italic">
				Real Estate Mortgage Broker in Portugal
			</h2> */}
				<h2 className="text-2xl">
					O banco de Portugal
					<br />é a entidade de supervisão de nossa atividade
				</h2>
				<p>
					CPCDS Consumer Solutions - Unipessoal, Lda - Intermediário de crédito
					vinculado, registado junto do Banco de Portugal, sob o número: 0006380
					(este registo pode ser verificado no Portal do Banco de Portugal:
					https://www.bportugal.pt/intermediarios-credito/).
				</p>
			</div>
			<div className="relative flex flex-col bg-white text-black h-80 text-center">
				<h2 className="pt-5">Seguro de Responsabilidade Civil</h2>
				<p className="absolute top-1/2">
					• Crédito Hipotecário: 2524519 - Hiscox, S. A. Sucursal em Portugal,
					válido de 01/07/2025 a 30/06/2026
				</p>
			</div>
			<div className="bg-black">
				<h2 style={{ textDecoration: "underline" }}>
					Serviços autorizados a prestar:
				</h2>
				<ol className="italic list-decimal list-inside pl-10" type="a">
					<li>Apresentando ou propondo contratos de crédito a consumidores.</li>
					<li>
						Prestando o serviço de assistência a consumidores mediante a
						realização de atos preparatórios ou de outros trabalhos de gestão
						pré-contratual relativamente a contratos de crédito que não tenham
						sido por si apresentados ou propostos.
					</li>
					<li>
						Celebrando contratos de crédito com consumidores em nome das
						instituições mutuantes
					</li>
					<li>
						Prestando serviços de consultoria, através da emissão de
						recomendações personalizadas sobre contratos de crédito
					</li>
					<li>
						A prestação de serviços de consultoria relativamente a contratos de
						crédito traduz- se na emissão de recomendações dirigidas
						especificamente a um consumidor sobre uma ou mais operações
						relativas a contratos de crédito
					</li>
				</ol>
				{/* <h2 style={{ textDecoration: "underline" }}>
					Services authorized to provide:
				</h2>
				<ul className="text-gray-600 list-disc list-inside pl-10">
					<li>Presenting or proposing credit agreements to consumers</li>
					<li>
						Providing consumer assistance services by carrying out preparatory
						acts or other pre-contractual management work regarding credit
						agreements that have not been presented or proposed by themselves
					</li>
					<li>
						Entering into credit agreements with consumers on behalf of lending
						institutions
					</li>
					<li>
						Providing consultancy services by issuing personalized
						recommendations on credit agreements
					</li>
				</ul> */}
				<h2>Bancos Mutantes:</h2>
				{/* <p className="text-gray-600">Banks with Agreements:</p> */}
				<ul className="pl-10">
					{bancos.map((b) => (
						<li key={b}>{b}</li>
					))}
				</ul>
			</div>
			<div className="bg-blue-400">
				{infos.map((i) => (
					<h3 key={i.slice(0, 10)}>{i}</h3>
				))}
				<p>Morada da Sede: Av. Elias Garcia, 144, 3ºEsq - 1050-101 Lisboa</p>
				<p>Contact: +351 968457 788</p>
				<p>E-mail: consumer.solutions@outlook.com</p>
				<br />
				<p>Política de privacidade (RGPD)</p>
			</div>
		</>
	);
}
