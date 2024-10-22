      Fatec Diadema  -  DSM   -  Integração e Entrega Continua 
Aluna: Catarine Lopes da Silva Sales 
 

Atividade : Automação de Teste

Part1 - Pesquisa sobre automação de testes

1.O que é automação de testes?
	A Automação de Testes é uma prática que visa aumentar a qualidade, a eficiência e a confiabilidade dos processos de teste de software.
Ela consiste em usar ferramentas, técnicas e metodologias para automatizar a execução, a verificação e a validação de testes, reduzindo a dependência do trabalho manual e repetitivo.

2.Quais os principais benefícios de realizar testes automatizados?
	É possível aumentar a qualidade, facilitando o encontro de erros e corrigi-los mais facilmente,evitando que eles se propaguem para as fases posteriores do ciclo de vida do software ou para os usuários finais. É possível a diminuição do tempo e os recursos necessários para realizar os testes, gerando uma economia significativa para o projeto. E por fim, é possível melhorar a experiência e a satisfação dos clientes, dos usuários e dos próprios testadores, onde os clientes e os usuários recebem um software de maior qualidade, com menos bugs e mais funcionalidades e os testadores podem se dedicar a atividades mais estratégicas e criativas, como planejar, projetar e analisar os testes, em vez de executá-los manualmente.

3.Ferramentas mais utilizadas para automação de testes em aplicações web.
	a.Inclua pelo menos uma ferramenta que seja voltada para testes de interface
(UI) e outra voltada para testes de comportamento (como Selenium, Cypress
ou Jest).

	Como teste de interface (UI) temos:
-Selenium: Uma das ferramentas mais conhecidas e amplamente utilizadas para automação de testes de interface. Permite a gravação e execução de scripts de teste em vários navegadores;

-Cypress: Ganhou popularidade rapidamente devido à sua simplicidade e eficiência. É excelente para testes de interface e oferece uma experiência de desenvolvimento amigável;

Como teste de comportamento, temos:
-Jest: Uma ferramenta de teste de comportamento muito popular, especialmente no ecossistema JavaScript. É amplamente utilizada para testar aplicações React, mas também pode ser usada para outros tipos de testes de comportamento;

-Cucumber: Focado em testes de comportamento, permite escrever testes em linguagem natural que podem ser entendidos por todas as partes envolvidas no desenvolvimento.


4.Diferença entre testes unitários de integração e end-to-end(E2E).

	Os teste Unitários tem como objetivo verificar se unidades individuais de código (como funções ou métodos) funcionam corretamente. Possui um Escopo muito limitado, focado em pequenas partes do código e de boa velocidade, pois testam pequenas partes do código.

	Já os testes de Integração, por sua vez,  possuem o objetivo de analisar se diferentes módulos ou componentes do sistema funcionam bem juntos. Esse teste é focado na interação entre várias partes do sistema. E é mais lento que os testes unitários, pois envolvem múltiplos componentes.

	E por fim, os testes End-to-end(E2E),  tem como foco verificar se o sistema completo funciona conforme esperado, do início ao fim. É muito amplo, cobrindo todo o fluxo da aplicação. E são mais lentos, pois simulam o comportamento do usuário real e testam o sistema inteiro.



Part2 - Criação do Projeto web 

1.Projeto Leilão: Crie um projeto simples utilizando HTML, CSS e JavaScript que
simule o comportamento de lances em um leilão de produto. O projeto deve conter:
a. Página HTML com a descrição de um produto em leilão.
b. Um campo para o usuário inserir o valor do lance.
c. Um botão para enviar o lance.
d. Exibir o lance mínimo e uma mensagem de erro se o lance inserido for menor que o lance mínimo.
e. Após o envio de um lance válido, a página deve exibir uma mensagem de sucesso com o valor do lance.


2. Automação de Testes: Utilize uma ferramenta de automação de testes (ex: Cypress ou Selenium) e crie um teste automatizado para as seguintes funcionalidades:
a. Verifique se, ao inserir um valor de lance menor que o lance mínimo, é exibida uma mensagem de erro e o lance não é aceito.

b. Verifique se, ao inserir um valor de lance igual ou maior que o lance mínimo, o lance é aceito e uma mensagem de sucesso é exibida.
