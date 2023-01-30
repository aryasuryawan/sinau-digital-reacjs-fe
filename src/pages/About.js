import React from 'react'
import { Link } from "react-router-dom";
import foto from '../assets/foto-arya.jpeg';

function About() {
    return (
        
        <div className="container mx-auto my-3 py-14 px-6">
        <div className="py-7">
            <h2 className="font-bold text-4xl mb-3 ">Tentang saya </h2>
            <p className="mt-6">Bismillah, salam kenal semua. Nama saya Muhamad Arya Kurniawan, saya adalah seorang project management specialist yang senang membantu UMKM masuk ke pasar digital melalui jasa desain komunikasi, kemasan, website, digital marketing dan pendampingan usaha. Saat ini saya mengabdi untuk Lembaga Zakat Nasional Dompet Dhuafa Republika sebagai IT Development & Data Center Manager. Oh iya, selain semua aktifitas itu saya adalah seorang story teller atau juru kisah/pendongeng yang biasa membantu kegiatan literasi dan dakwah anak.</p>
            <img src={foto} className="py-6"/>
            <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget arcu dictum varius duis. Enim nunc faucibus a pellentesque sit. Risus commodo viverra maecenas accumsan. Pellentesque id nibh tortor id aliquet lectus proin. Diam phasellus vestibulum lorem sed. Mattis aliquam faucibus purus in massa tempor nec. Euismod quis viverra nibh cras pulvinar mattis. Senectus et netus et malesuada fames ac turpis egestas maecenas. In nisl nisi scelerisque eu ultrices vitae. Sed tempus urna et pharetra. Mauris commodo quis imperdiet massa tincidunt nunc. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Fermentum odio eu feugiat pretium. Cras pulvinar mattis nunc sed blandit libero. Maecenas sed enim ut sem viverra. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Et pharetra pharetra massa massa ultricies mi quis. Et netus et malesuada fames ac turpis egestas.</p>
            <p className="mt-6">Sed augue lacus viverra vitae congue eu. Quam quisque id diam vel. Sed enim ut sem viverra aliquet eget sit amet. Auctor neque vitae tempus quam. Nam aliquam sem et tortor. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Quam id leo in vitae turpis. Aliquam sem fringilla ut morbi tincidunt. Convallis convallis tellus id interdum velit laoreet id donec. Risus at ultrices mi tempus.</p>
        </div>
        
    </div>
    )
}

export default About