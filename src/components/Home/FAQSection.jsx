export default function FAQSection() {
  return (
    <section className="text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral">
        Frequently asked questions
      </h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto">
        Everything you need to know about our amazing services.
      </p>

      <div className="max-w-2xl mx-auto space-y-4 text-left">
        {/* FAQ Item 1 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-200 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-md font-medium">
            How does quizapp work?
          </div>
          <div className="collapse-content">
            <p>
              Quizapp provides fun, interactive quizzes to challenge your knowledge in various topics.
            </p>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-200 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-md font-medium">
            Where is my data store?
          </div>
          <div className="collapse-content">
            <p>
              Your data is securely stored on our encrypted cloud servers with daily backups.
            </p>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-200 rounded-box">
          <input type="checkbox" defaultChecked />
          <div className="collapse-title text-md font-medium">
            How is my data being used
          </div>
          <div className="collapse-content">
            <p>Your data is completely private and won&apos;t be used anywhere.</p>
          </div>
        </div>

        {/* FAQ Item 4 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-200 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-md font-medium">
            Why is it not possible for me to add more questions?
          </div>
          <div className="collapse-content">
            <p>
              Our free plan limits question creation. Upgrade to Pro for unlimited access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
