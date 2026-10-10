/* ============================================================
   CARDÁPIO — edite preços e itens SOMENTE neste arquivo.
   Ele é usado pelo cardápio do cliente (index.html) e pela
   tela do caixa (cozinha.html).
   Para esgotar um item, acrescente  esgotado: true  nele.
   ============================================================ */
/* Espetinhos tradicionais (R$ 15) */
const TRAD = ["Contra filé", "Cupim", "Picanha montada", "Frango puro", "Frango c/ bacon", "Tulipa de frango",
  "Coração", "Linguiça c/ pimenta", "Provolone", "Queijo coalho", "Kafta bovina", "Romeu e julieta"];
const MEIA = (i, m) => [{ nome: "Inteira", preco: i }, { nome: "Meia", preco: m }];
const CALDO_ACOMP = "Acompanha cebolinha, queijo ralado, torresmo e torrada.";

const MENU = [
  { id: "jantinhas", nome: "Jantinhas", setor: "cozinha", secoes: [
    { titulo: "Jantinhas", itens: [
      { id: "j1", nome: "Jantinha completa c/ espeto", desc: "Arroz, feijão tropeiro, mandioca, vinagrete e alface.", opcoes: MEIA(30, 28), espeto: true },
      { id: "j2", nome: "Jantinha s/ espeto", desc: "Arroz, feijão tropeiro, mandioca, vinagrete e alface.", preco: 20 },
      { id: "j3", nome: "Jantinha feijão de caldo c/ espeto", desc: "Arroz, feijão de caldo, mandioca, vinagrete e alface.", opcoes: MEIA(30, 28), espeto: true },
      { id: "j4", nome: "Jantinha strogonoff c/ espeto", desc: "Arroz, strogonoff, batata palha, vinagrete e alface.", opcoes: MEIA(35, 32), espeto: true },
      { id: "j5", nome: "Jantinha de strogonoff", desc: "Arroz, strogonoff, batata palha, vinagrete e alface.", opcoes: MEIA(28, 25) },
      { id: "j6", nome: "Jantinha de picanha Premium", desc: "", preco: 42,
        partes: [["churrasqueira", "Picanha premium", "p/ jantinha de picanha"]] },
      { id: "j7", nome: "Espetinho c/ adicional de mandioca", desc: "Escolha o espeto abaixo.", preco: 18, espeto: true,
        setor: "nenhum", notaEspeto: "c/ adicional de mandioca",
        partes: [["cozinha", "Adicional de mandioca", "p/ espetinho"]] },
      { id: "j8", nome: "Espetinho de picanha Premium c/ adicional de mandioca", desc: "", preco: 35,
        setor: "nenhum",
        partes: [["churrasqueira", "Picanha premium", "c/ adicional de mandioca"], ["cozinha", "Adicional de mandioca", "p/ espetinho"]] }
    ]}
  ]},
  { id: "espetinhos", nome: "Espetinhos", setor: "churrasqueira", secoes: [
    { titulo: "Espetinhos", nota: "Todos por R$ 15,00.", itens: TRAD.map((n, i) => ({ id: "t" + i, nome: n, desc: "", preco: 15 })) },
    { titulo: "Espetinhos nobres", itens: [
      { id: "n1", nome: "Carne de sol", desc: "", preco: 18 },
      { id: "n2", nome: "Medalhão de carne de sol", desc: "", preco: 32 },
      { id: "n3", nome: "Filé mignon ao alho", desc: "", preco: 18 },
      { id: "n4", nome: "Picanha premium", desc: "", preco: 32 }
    ]}
  ]},
  { id: "porcoes", nome: "Porções", setor: "cozinha", secoes: [
    { titulo: "Porções", itens: [
      { id: "p1", nome: "Batata frita simples", desc: "", opcoes: [{ nome: "250 g", preco: 20 }, { nome: "500 g", preco: 28 }] },
      { id: "p2", nome: "Batata frita especial", desc: "Com cheddar e bacon.", opcoes: [{ nome: "250 g", preco: 27 }, { nome: "500 g", preco: 38 }] },
      { id: "p3", nome: "Filé de tilápia 500 g", desc: "Serve até 3 pessoas. Acompanha arroz, feijão tropeiro, vinagrete e alface.", preco: 95 },
      { id: "p4", nome: "Porção de tilápia", desc: "Somente o peixe.", preco: 65 },
      { id: "p5", nome: "Porção de discos", desc: "", preco: 40 },
      { id: "p6", nome: "Salada", desc: "Alface e tomate.", opcoes: [{ nome: "Inteira", preco: 20 }, { nome: "Meia", preco: 15 }] },
      { id: "p7", nome: "Mandioca", desc: "", opcoes: [{ nome: "Grande", preco: 17 }, { nome: "Meia", preco: 10 }] },
      { id: "p8", nome: "Torresmo", desc: "", preco: 20 },
      { id: "p9", nome: "Strogonoff 300 ml", desc: "", preco: 15 },
      { id: "p10", nome: "Porção de arroz", desc: "", opcoes: [{ nome: "Inteira", preco: 16 }, { nome: "Meia", preco: 10 }] },
      { id: "p11", nome: "Porção de feijão tropeiro", desc: "", opcoes: [{ nome: "Inteira", preco: 18 }, { nome: "Meia", preco: 13 }] },
      { id: "p12", nome: "Panceta", desc: "", preco: 40 }
    ]}
  ]},
  { id: "caldos", nome: "Caldos", setor: "cozinha", secoes: [
    { titulo: "Caldos", nota: CALDO_ACOMP, itens: [
      { id: "c1", nome: "Caldo de frango", desc: "", opcoes: [{ nome: "Inteiro", preco: 20 }, { nome: "Meio", preco: 15 }] },
      { id: "c2", nome: "Caldo de feijão", desc: "", opcoes: [{ nome: "Inteiro", preco: 20 }, { nome: "Meio", preco: 15 }] },
      { id: "c3", nome: "Caldo de carne c/ mandioca", desc: "", opcoes: [{ nome: "Inteiro", preco: 20 }, { nome: "Meio", preco: 15 }] },
      { id: "c4", nome: "Adicionais de acompanhamento", desc: "Para turbinar o caldo.", preco: 15 }
    ]}
  ]},
  { id: "bebidas", nome: "Bebidas", setor: "bebidas", secoes: [
    { titulo: "Refrigerantes", itens: [
      ["Coca-Cola lata zero", 7], ["Coca-Cola lata", 7], ["Coca-Cola 600 ml", 8], ["Coca-Cola 600 ml zero", 8],
      ["Coca-Cola 1 L", 12], ["Coca-Cola 1 L zero", 12], ["Coca-Cola 2 L", 16], ["Fanta lata", 7], ["Fanta 2 L", 16],
      ["Sprite lata", 7], ["Sprite 2 L", 16], ["Pepsi 2 L", 16], ["Schweppes lata", 7], ["H2O (Limoneto)", 8],
      ["Água mineral", 3.5], ["Água com gás", 5.5], ["Suco Lafruit (uva, cajú ou maracujá)", 12]
    ].map((x, i) => ({ id: "r" + i, nome: x[0], desc: "", preco: x[1] })) },
    { titulo: "Cervejas", itens: [
      ["Heineken Long Neck", 10], ["Heineken 600 ml", 16], ["Amstel 600 ml", 14], ["Original 600 ml", 15], ["Brahma 600 ml", 12]
    ].map((x, i) => ({ id: "v" + i, nome: x[0], desc: "", preco: x[1] })) },
    { titulo: "Sucos", nota: "Escolha o sabor e o tamanho.", itens: ["Laranja", "Morango", "Abacaxi", "Acerola", "Tamarindo", "Maracujá"].map((s, i) => ({
      id: "s" + i, nome: "Suco de " + s.toLowerCase(), desc: "",
      opcoes: [{ nome: "500 ml", preco: 14 }, { nome: "700 ml", preco: 17 }, { nome: "1,5 L", preco: 25 }] })) }
  ]}
];

function priceOf(item, opt) { return item.opcoes ? item.opcoes[opt].preco : item.preco; }

/* Divide cada item do pedido entre churrasqueira, cozinha e bebidas */
function partesDe(item, o, e, q) {
  const det = item.opcoes ? " (" + item.opcoes[o].nome + ")" : "";
  const p = [];
  if (item.setor !== "nenhum") p.push({ setor: item.setor, qtd: q, txt: item.nome + det });
  if (item.espeto && e !== null) p.push({ setor: "churrasqueira", qtd: q, txt: TRAD[e], nota: item.notaEspeto || ("p/ " + item.nome + det) });
  (item.partes || []).forEach(x => p.push({ setor: x[0], qtd: q, txt: x[1], nota: x[2] || "" }));
  return p;
}
