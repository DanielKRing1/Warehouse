import { FlexRow } from "../Flex/FlexRow";

type InputWLabelProps = {
    label: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputWLabel = ({
    label,
    value,
    placeholder,
    onChange,
}: InputWLabelProps) => (
    <FlexRow>
        <p>{label}</p>
        <input placeholder={placeholder} value={value} onChange={onChange} />
    </FlexRow>
);

export default InputWLabel;
