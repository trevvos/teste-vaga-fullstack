export function isValidCpfCnpj(nrCpfCnpj: string): boolean {

    const cleanedNrCpfCnpj = nrCpfCnpj.replace(/\D/g, '')

    if(cleanedNrCpfCnpj.length === 11) {
        return isValidCpf(cleanedNrCpfCnpj)
    }

    else if(cleanedNrCpfCnpj.length === 14) {
        return isValidCnpj(cleanedNrCpfCnpj)
    }

    else {
        return false
    }
}

function isValidCpf(cpf: string): boolean{

      // Remove caracteres não numéricos
      const cleanedCpf = cpf.replace(/\D/g, '');

      // Verifica se todos os dígitos são iguais
      if (/^(\d)\1{10}$/.test(cleanedCpf)) return false
  
      // Calcula o primeiro dígito verificador
      let sum = 0
      for (let i = 0; i < 9; i++) {
          sum += parseInt(cleanedCpf.charAt(i)) * (10 - i)
      }
      let remainder = 11 - (sum % 11)
      if (remainder === 10 || remainder === 11) remainder = 0
      if (remainder !== parseInt(cleanedCpf.charAt(9))) return false
  
      // Calcula o segundo dígito verificador
      sum = 0
      for (let i = 0; i < 10; i++) {
          sum += parseInt(cleanedCpf.charAt(i)) * (11 - i)
      }
      remainder = 11 - (sum % 11)
      if (remainder === 10 || remainder === 11) remainder = 0
      if (remainder !== parseInt(cleanedCpf.charAt(10))) return false
  
      return true
}

function isValidCnpj(cnpj: string): boolean {
    // Remove caracteres não numéricos
    const cleanedCnpj = cnpj.replace(/\D/g, '');

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{13}$/.test(cleanedCnpj)) return false;

    // Calcula o primeiro dígito verificador
    let sum = 0;
    const length = cleanedCnpj.length - 2;
    for (let i = length; i >= 0; i--) {
        sum += parseInt(cleanedCnpj.charAt(length - i)) * (2 + (length - i) % 8);
    }
    let remainder = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (remainder !== parseInt(cleanedCnpj.charAt(length + 1))) return false;

    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = length + 1; i >= 0; i--) {
        sum += parseInt(cleanedCnpj.charAt(length - i)) * (2 + (length - i + 1) % 8);
    }
    remainder = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (remainder !== parseInt(cleanedCnpj.charAt(length + 2))) return false;

    return true;
}