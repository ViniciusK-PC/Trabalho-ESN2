import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const { register, watch } = useForm({
    defaultValues: {
      modelo: "planta01.jpg"
    }
  })
  let preco 
  let entrada
  let parcela

  function calculaPreco() {
    
    if (watch("planta") == "planta01.jpg") {
      preco = 240000
    } else if (watch("planta") == "planta02.jpg") {
      preco = 280000 
    } else if (watch("planta") == "planta03.jpg") {
      preco = 320000
    } else {
      preco = 360000
    }

    if (watch("garagem")) {
      preco = preco + 20000 
      calculaEntrada()
    }
    return preco

  }
  function calculaEntrada () {
      
    if (watch("planta") == "planta01.jpg") {
       entrada = preco * 0.30
    } else if (watch("planta") == "planta02.jpg") {
      entrada = preco * 0.30
    } else if (watch("planta") == "planta03.jpg") {
      entrada = preco * 0.30
    } else {
      entrada = preco * 0.30
    }
    return entrada
  } 
  function calculaParcela () {
   
  //   if (watch("planta") == "planta01.jpg") {
  //     parcela = preco / 120
  //  } else if (watch("planta") == "planta02.jpg") {
  //     parcela = preco / 120
  //  } else if (watch("planta") == "planta03.jpg") {
  //     parcela = preco / 120
  //  } else {
  //    parcela = (preco - entrada) / 120
  //  }
   return parcela = (preco - entrada) / 120

  }

  return (
    <>
      <div className="titulo">
        <img src='logo.png' alt='logo' className='logo'></img>
        <div>
          <h1> Construtora Avenida</h1>
          <h2> Edificios Residencias</h2>
        </div>
      </div>
      <div className="principal">
        <div>
          <h2>Edicio Dom React - Pré Venda</h2>
          <p className='p-destaque'>Escolha Numero de dormitorios:</p>
          <p>
            <input type="radio" name="planta" id="planta01" value="planta01.jpg"{...register("planta")}></input>
            <label htmlFor="planta01">1 Dormitorio</label>
          </p>
          <p>
            <input type="radio" name="planta" id="2" value="planta02.jpg"{...register("planta")}></input>
            <label htmlFor="planta02">2 Dormitorio</label>
          </p>
          <p>
            <input type="radio" name="planta" id="planta03" value="planta03.jpg"{...register("planta")}></input>
            <label htmlFor="planta03">3 Dormitorio</label>
          </p>
          <p>
            <input type="radio" name="planta" id="planta03S" value="planta03S.jpg"{...register("planta")}></input>
            <label htmlFor="planta03S">3 Dormitorio e Uma suite</label>
          </p>
        </div>
        <div>
          <img src={watch("planta")} alt="ap" className='img-principal' />
        </div>
        <p>
            <input type="checkbox" id="garagem" 
              {...register("garagem")} />
            <label htmlFor="garagem">Com vaga de garagem</label>
        </p>      
      </div>
       <div className="rodape">
          <div className='rodape-texto'>   
            <h1 className='texto-rodape'>
             Volar total R$: &nbsp;
             {calculaPreco().toLocaleString("pt-br", {
             minimumFractionDigits: 2
             })}
            </h1>
         </div>
         <div className='texto-parcela'> 
            <h1 className='texto-rodape'><i>Entrada R$ &nbsp; {calculaEntrada().toLocaleString("pt-br", {
                    minimumFractionDigits: 2 
                  })}</i> + </h1>
            <h1 className='texto-rodape2'><i> 120x Parcelas nos Valores R$:{calculaParcela().toLocaleString("pt-br", {
                    minimumFractionDigits: 2 
            })}</i></h1>
          </div>
        </div>

    </>
  )
}

export default App
