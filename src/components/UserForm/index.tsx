import "./index.css";

interface FormProps {
  data: {
    name: string;
    email: string;
    review: string;
    comment: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
}

export function UserForm({ data, updateFieldHandler }: FormProps) {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome"
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="name">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
          value={data.email}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          required
        />
      </div>
    </div>
  );
}
