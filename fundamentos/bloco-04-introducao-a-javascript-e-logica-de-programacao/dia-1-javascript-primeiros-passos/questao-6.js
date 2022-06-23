// Questão 6

const chessPiece = "rei";

const lineText = '========== Movimento das peças =========='
const line = '======================================'

console.log(line)
switch (true) {
  case chessPiece.toLowerCase() === "bishop":
    console.log("## Diagonais ## ");
    break;
  case chessPiece.toLowerCase() === "peao":
    console.log("## Vertical e Horizontal ##");
    break;

  case chessPiece.toLowerCase() === "cavalo":
    console.log("## Formato de L ##");
    break;

  case chessPiece.toLowerCase() === "torre":
    console.log("## Linhas Retas ##");
    break;

    case chessPiece.toLowerCase() === "rainha":
    console.log("## Linhas Retase Diagonal ##");
    break

    case chessPiece.toLowerCase() === "rei":
    console.log("## Horizontal, Vertical e Diagonal ##");
    break

  default:
    console.log("[X] Erro. Insira uma peça válid [X]");
}
console.log(line)
