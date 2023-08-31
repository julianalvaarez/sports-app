import {AiFillEnvironment,AiFillCreditCard,AiFillShop,} from "react-icons/ai";

export const Info = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:my-18 justify-around w-full items-center mt-12 mb-12">
        <div>
          <AiFillEnvironment className="text-8xl mx-auto mb-2" />
          <h3 className="font-bold text-xl mb-1">ENVIO A DOMICILIO</h3>
          <p className="text-center">Envios a todo el pais</p>
          <hr className="my-6" />
        </div>
        <div>
          <AiFillCreditCard className="text-8xl mx-auto mb-2" />
          <h3 className="font-bold text-xl text-center mb-1">
            ACEPTAMOS TARJETA
          </h3>
          <p className="text-center">
            Tarjeta de Credito, Debito <br /> y Mercado Pago.
          </p>
          <hr className="my-6" />
        </div>
        <div>
          <AiFillShop className="text-8xl mx-auto mb-2" />
          <h3 className="font-bold text-xl text-center mb-1">
            SUCURSALES POR TODO <br /> BUENOS AIRES
          </h3>
          <p className="text-center">
            Locales en Wilde, Moron, Villa Urquiza <br /> y Tigre
          </p>
          <hr className="hidden lg:block my-6" />
        </div>
      </div>
    </>
  );
};
