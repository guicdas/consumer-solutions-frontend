"use client";

import { useTranslations } from "use-intl";

export default function Services() {
	const t = useTranslations();
	const bancos = [
		"BANCO BPI, SA",
		"BANCO BIC PORTUGUÊS, SA",
		"ABANCA CORPORACIÓN BANCARIA, SA, SUCURSAL EM PORTUGAL",
		"BANCO CTT, SA",
		"NOVO BANCO, SA",
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
					{t("services-hero.title")}
				</h1>
				<h2 className="text-2xl">{t("services-hero.subtitle")}</h2>
				<p>{t("services-hero.text")}</p>
			</div>
			<div className="relative text-2xl justify-center flex flex-col bg-white text-black h-80 text-center">
				<h2>{t("services-responsabilidade.title")}</h2>
				<p className="relative">{t("services-responsabilidade.text")}</p>
			</div>
			<div className="bg-black">
				<h2 style={{ textDecoration: "underline" }}>
					{t("services-servicos.title")}
				</h2>
				<ol className="italic list-decimal list-inside pl-10" type="a">
					{Array.from({ length: 5 }).map((_, i) => (
						<p key={`listitem-${i + 1}`}>{t(`services-servicos.text.${i}`)}</p>
					))}
				</ol>
				<h2>{t("services-servicos.banks")}</h2>
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
