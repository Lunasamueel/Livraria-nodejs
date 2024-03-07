import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.post("/livro", LivroController.cadastrarLivros);
routes.put("/livro/:id", LivroController.atualizarLivro);
routes.delete("/livro/:id", LivroController.excluirLivro);
export default routes;
