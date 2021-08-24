import "./CompanyData.css";
import smfoto from "../../images/sm-foto.JPG";
const CompanyData = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <img src={smfoto}></img>

        <div className="aboutus-companytext">
          <div className="companyText">
            toko kami menyajikan produk terbaik dan terpercaya kepada pelanggan.
            Kami siap melayani pelanggan baik offline maupun online. Cukup dengan 1
            panggilan, kami siap untuk memenuhi bahan kebutuhan rumah tangga anda!
            </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyData;
