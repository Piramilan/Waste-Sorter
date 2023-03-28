import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import * as tmImage from "@teachablemachine/image";
import { config } from "@/config/config";

interface ModelContextInterface {
  model: tmImage.CustomMobileNet | null;
}
interface Props {
  children: ReactNode;
}

const ModelContext = createContext<ModelContextInterface>({
  model: null,
});

export const useModel = () => useContext(ModelContext);

const ModelProvider = ({ children }: Props) => {
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      const model = await tmImage.load(config.modelURL, config.metadataURL);
      setModel(model);
    };
    loadModel();
  }, []);

  return (
    <ModelContext.Provider value={{ model }}>{children}</ModelContext.Provider>
  );
};

export default ModelProvider;
