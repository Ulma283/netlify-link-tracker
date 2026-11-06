export default async (request, context) => {
  const ip = context.ip; // Látogató IP címe
  const country = context.geo?.country?.name || "Ismeretlen"; // Ország
  const city = context.geo?.city || "Ismeretlen"; // Város

  // Kiírjuk az adatokat a Netlify naplóba
  console.log(`--- ÚJ KATTINTÁS ---`);
  console.log(`IP: ${ip} | Város: ${city} | Ország: ${country}`);

  // Ide írd be azt a weboldalt, ahova a látogatót küldeni akarod (pl. Google)
  return Response.redirect("https://google.com", 302);
};
