import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-black to-purple-900 text-white p-10"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-4">{t("hero_title")}</h1>
      <p className="text-xl opacity-80 mb-8">{t("hero_sub")}</p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-purple-600 rounded-lg">Get Started</button>
        <button className="px-6 py-3 bg-white text-black rounded-lg">جرّب الذكاء الاصطناعي</button>
      </div>
    </motion.div>
  );
}
