export declare enum Tipo {
    criminal = "criminal",
    civil = "civil",
    pequenas_causas = "pequenas causas"
}
export declare class CreateProcessDto {
    typy_action: Tipo;
    accused_party: string;
    accuse_part: string;
    process_text: string;
}
