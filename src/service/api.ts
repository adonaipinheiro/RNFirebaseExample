import {ApiI} from './api.types';

/**
 * Objeto criado para fazer o intermédio com o BD
 */
const api: ApiI = {
  /**
   * Função para logar com digital
   * @param name Nome do usuário
   * @param pass Senha do usuário
   */
  loginWithDigital: async (digitalHash) => {
    /**
     * Faça conexão com banco, etc...
     */
    return {
      digitalHash,
    };
  },
  /**
   * Função para logar com digital
   * @param name Nome do usuário
   * @param pass Senha do usuário
   */
  loginWithFacebook: async (name, pass) => {
    /**
     * Faça conexão com banco, etc...
     */
    return {
      name,
      pass,
    };
  },
};

export default api;
