
import Content from "./components/ai/modelSelector/ModelContent";
import Items from "./components/ai/modelSelector/ModelItems";
import ModelSelector from "./components/ai/modelSelector/ModelSelector";
import Input from "./components/ai/modelSelector/ModelInput";
import Searchh from "./components/ai/modelSelector/ModelInput";
import Trigger from "./components/ai/modelSelector/ModelTrigger";



export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#F2F0EF] dark:bg-black">
        <ModelSelector>
            <Trigger />
            <Content>
              <Input/>
              <Items/>
            </Content>
        </ModelSelector>
    </div>
  );
}
