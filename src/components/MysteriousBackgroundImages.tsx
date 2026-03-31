import React from 'react';
import { motion } from 'motion/react';

const IMAGES = [
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoAhRsNsW4Ypbrj1EQgopt_tpWTksBhY_b4Qiz6aZypfQaKDJJY4bY104PJXxvanUZfQqS4G-zxqaG9bnTbyKbLF1UzFgGKPTUsiZWd2DdUwi-81FqiDs2qe78CvtI_MsUTtdAqlqYIEBLQ04097pP8O0LUPLDbdiHZ09Jb5yezZQ07D3stImhA-qLDvk/s768/imagen1.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjJUjcpfsiBIy7NsX3nkBu_7Qyben_qon4Ac8LRTIZ4If7VabU2FIsInU58QZGRLAEjJHmLPq6Dnwow7NXHHD8TqKjv6uepA195chwtGP-Z82dY9DqQL1E61uN7Lczakl77WH6TJ_-Gj_hJ3DcI0EiJQgy8c2RPHhqYAjfOUJlWkLSbPPk2HQA7iuNU8I/s1376/imagen2.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTi0wrno3FyuSgnan_AZ152aC106oapjMKa8ipWL_KfuMQnxBii-7YLdEDaroBimpk21JmBJ2poTQYENNQrkpamIeKDKqcBXIcjMMzG-1DEL6Cm7Mb1dPedkDojbPBmYaYtWQINnudDAyhls3dYWG6s729pMd2FOkI_tGZJUhW1-fVCIV7yEPTD87-NfE/s1098/imagen3.png'
];

export const MysteriousBackgroundImages: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {IMAGES.map((src, index) => (
        <motion.div
          key={index}
          initial={{ 
            opacity: 0, 
            scale: 1.5, 
            x: `${Math.random() * 100 - 50}%`, 
            y: `${Math.random() * 100 - 50}%`,
            rotate: Math.random() * 360
          }}
          animate={{
            opacity: [0, 0.1, 0.15, 0.1, 0],
            scale: [1.5, 1.8, 1.5],
            x: [`${Math.random() * 100 - 50}%`, `${Math.random() * 100 - 50}%`],
            y: [`${Math.random() * 100 - 50}%`, `${Math.random() * 100 - 50}%`],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 15,
            repeat: Infinity,
            delay: index * 7,
            ease: "linear",
          }}
          className="absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] filter blur-[60px] md:blur-[100px] mix-blend-screen opacity-0"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  );
};
