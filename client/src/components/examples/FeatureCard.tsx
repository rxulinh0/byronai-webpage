import FeatureCard from '../FeatureCard';
import { Brain } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="p-8">
      <FeatureCard 
        icon={Brain}
        title="AI Autocompletion"
        description="Get intelligent suggestions as you write, helping you find the perfect words and maintain your poetic flow."
      />
    </div>
  );
}