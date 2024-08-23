type MajorCitiesProps = {
    label : string;
};

export default function MajorCities({ label }: MajorCitiesProps) {
    return (
        <div className="text-center rounded-full font-medium bg-[#E2E8E8] py-3">{label}</div>
    );
}
