import {
  Anchor,
  Heading,
  MainContainer,
  WordLink,
} from '@tracinho/ui-components';
import NegationExample from './NegationExample';

export default function Page(): JSX.Element {
  return (
    <MainContainer title="Como distinguir">
      <Heading level={2} className="pb-4">
        1. Sílaba tónica
      </Heading>

      <p className="pb-3">
        Um dos truques mais comuns para saber se devemos usar a palavra com ou
        sem hífen é conseguir identificar a sílaba tónica das palavras.{' '}
        <strong>
          Quando a palavra tem hífen então a sílaba tónica é a primeira sílaba
        </strong>
        , como nos seguintes exemplos:
      </p>

      <ul>
        <li>
          <WordLink word="marcasse">
            <strong>ma</strong>rca-se
          </WordLink>
          &mdash; sílaba tónica <i>ma</i>;
        </li>
        <li>
          <WordLink word="passaste">
            <strong>pa</strong>ssas-te
          </WordLink>
          &mdash; sílaba tónica <i>pa</i>;
        </li>
        <li>
          <WordLink word="levamos">
            <strong>le</strong>va-mos
          </WordLink>
          &mdash; sílaba tónica <i>le</i>.
        </li>
      </ul>

      <p>
        Se a palavra não tem hífen, a acentuação da palavra é feita na segunda
        sílaba:
      </p>
      <ul>
        <li>
          <WordLink word="marcasse" /> &mdash; &laquo;marc<strong>a</strong>
          sse&raquo;;
        </li>
        <li>
          <WordLink word="passaste" /> &mdash; &laquo;pass<strong>a</strong>
          ste&raquo;;
        </li>
        <li>
          <WordLink word="levamos" /> &mdash; &laquo;lev<strong>a</strong>
          mos&raquo;.
        </li>
      </ul>

      <Heading level={2} className="pb-4 pt-10">
        2. Negativa
      </Heading>

      <p className="pb-3">
        Outra técnica para destrinçar algumas das palavras é pôr a frase na
        negativa. Isto deve-se ao facto de o pronome (&ldquo;te&rdquo; e
        &ldquo;se&ldquo;) passar para a{' '}
        <strong>posição anterior ao verbo na frase negativa</strong> se existir
        hífen, o que, no caso de o verbo estar no presente do indicativo, exclui
        a hipótese de confusão com o pretérito perfeito do indicativo ou com o
        pretérito imperfeito do conjuntivo.
      </p>

      <div className="pt-4">
        <p className="pb-3">
          Assim, para frases com a forma correta a negação faz sentido:
        </p>

        <ul className="flex list-inside list-disc flex-col gap-3">
          <NegationExample
            first={
              <>
                Ele <WordLink word="apressasse">apressa-se</WordLink> para
                apanhar o avião
              </>
            }
            second={
              <>
                Ele <span>não se apressa</span> para apanhar o avião;
              </>
            }
          />

          <NegationExample
            first={
              <>
                Ontem <WordLink word="gostaste" /> do filme
              </>
            }
            second={
              <>
                Ontem <span>não gostaste</span> do filme;
              </>
            }
          />

          <NegationExample
            first={
              <>
                <WordLink word="estudaste">Estudaste</WordLink> pouco de manhã
              </>
            }
            second={
              <>
                <span>Não estudaste</span> pouco de manhã;
              </>
            }
          />

          <NegationExample
            first={
              <>
                Tu <WordLink word="mandaste">mandas-te</WordLink> logo de cabeça
              </>
            }
            second={
              <>
                Tu <span>não te mandas</span> logo de cabeça.
              </>
            }
          />
        </ul>
      </div>

      <div className="pt-6">
        <p className="pb-3">
          Facilmente se percebe que os seguintes exemplos estão incorrectos ao
          testar a negativa:
        </p>

        <ul className="flex list-inside list-disc flex-col gap-3">
          <NegationExample
            first={
              <>
                Ele <Anchor href="/words/apressasse">apressasse</Anchor> para
                apanhar o avião
              </>
            }
            second={
              <>
                Ele <span className="text-red-500">não apressasse</span> para
                apanhar o avião;
              </>
            }
          />

          <NegationExample
            first={
              <>
                Ontem <Anchor href="/words/gostaste">gostas-te</Anchor> do filme
              </>
            }
            second={
              <>
                Ontem <span className="text-red-500">não te gostas</span> do
                filme;
              </>
            }
          />

          <NegationExample
            first={
              <>
                <Anchor href="/words/estudaste">Estudas-te</Anchor> pouco de
                manhã
              </>
            }
            second={
              <>
                <span className="text-red-500">Não te estudas</span> pouco de
                manhã;
              </>
            }
          />

          <NegationExample
            first={
              <>
                Tu <Anchor href="/words/mandaste">mandaste</Anchor> logo de
                cabeça
              </>
            }
            second={
              <>
                Tu <span className="text-red-500">não mandaste</span> logo de
                cabeça.
              </>
            }
          />
        </ul>
      </div>
    </MainContainer>
  );
}
