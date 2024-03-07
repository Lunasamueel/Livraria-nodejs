import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (err) {
      res.status(500).json({ message: `erro ao listar autores: ${err}` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ messagem: "autor criado com sucesso.", autor: novoAutor });
    } catch (err) {
      res.status(500).json({ messagem: `erro ao criar novo autor: ${err}` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      console.log(req.body);
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "autor atualizado", autor: req.body });
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - falha na atualizacao` });
    }
  }

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({
        messagem: "autor excluido com sucesso.",
      });
    } catch (err) {
      res.status(500).json({ messagem: `erro ao excluir novo autor: ${err}` });
    }
  }
}

export default AutorController;
