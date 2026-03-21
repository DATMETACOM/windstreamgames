import { Brain, Gamepad2, Heart, Smartphone, Trophy, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Train Your Brain",
    description: "Enhance logical thinking and problem-solving skills through engaging challenges",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Gamepad2,
    title: "Simple Gameplay",
    description: "Easy to start but hard to master. Suitable for all ages",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Smartphone,
    title: "Play Anywhere",
    description: "Perfect compatibility with all devices. Play offline without internet",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Trophy,
    title: "Achievements & Rewards",
    description: "Unlock badges, collect items and compete on leaderboards",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Heart,
    title: "No Annoying Ads",
    description: "Smooth gaming experience without interruption from ads",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Zap,
    title: "Regular Updates",
    description: "New levels, features and special events updated weekly",
    color: "from-green-500 to-green-600",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience amazing puzzle games with unique features
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}