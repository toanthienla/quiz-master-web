import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Pricing() {
  const user = useSelector((state) => state.user);

  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Basic Quizzes",
        "Access to Public Quizzes",
        "Limited Attempts",
        "Community Support"
      ],
      button: "Get Started",
      highlight: false
    },
    {
      name: "Pro",
      price: "$9.99",
      features: [
        "Unlimited Quiz Attempts",
        "Create Private Quizzes",
        "Performance Stats",
        "Priority Support"
      ],
      button: "Upgrade Now",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      features: [
        "Team Access",
        "Admin Dashboard",
        "Custom Features",
        "Dedicated Support"
      ],
      button: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} />

      <main className="flex-grow bg-base-200/50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-gray-500 mb-10">Find the plan that fits your needs.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-md p-6 flex flex-col justify-between border ${plan.highlight ? "border-primary" : "border-gray-200"}`}
              >
                <div>
                  <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
                  <p className="text-3xl font-bold mb-4">{plan.price}</p>
                  <ul className="text-left space-y-2 text-gray-700">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        ✅ {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  {plan.name === "Free" && (
                    <Link
                      to="/register"
                      className="btn btn-outline w-full"
                    >
                      {plan.button}
                    </Link>
                  )}

                  {plan.name === "Pro" && (
                    <button className="btn btn-primary w-full text-white">
                      {plan.button}
                    </button>
                  )}

                  {plan.name === "Enterprise" && (
                    <a href="mailto:support@quizmaster.com" className="btn btn-neutral w-full">
                      {plan.button}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}