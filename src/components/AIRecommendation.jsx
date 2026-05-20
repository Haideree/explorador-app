function AIRecommendation() {

  const temperature = 18;

  let recommendation = "";

  if (temperature < 20) {
    recommendation = "La IA recomienda usar ropa abrigada.";
  } else {
    recommendation = "La IA recomienda ropa ligera.";
  }

  return (
    <div>
      <h2>Recomendación IA</h2>

      <p>{recommendation}</p>
    </div>
  );
}

export default AIRecommendation;