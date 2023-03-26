import { useEffect, useState } from "react";
// import axios from "axios";

type PredictionProps = {
  url: string;
};

function Prediction({ url }: PredictionProps) {
  const [predictions, setPredictions] = useState<string[]>([]);

  useEffect(() => {
    const predict = async () => {
      try {
        // const response = await axios.post("/api/predict", { url });
        // setPredictions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    predict();
  }, [url]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-900">Predictions</h2>

      {predictions.length > 0 ? (
        <ul className="mt-4">
          {predictions.map((prediction, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="text-gray-900 font-medium">{index + 1}.</span>
              <span className="ml-2">{prediction}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-gray-600">Loading predictions...</p>
      )}
    </div>
  );
}

export default Prediction;
