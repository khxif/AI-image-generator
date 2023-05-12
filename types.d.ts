type UserInputProps = {
    title:string,
    tag:string,
    description:string,
}
type InputFieldProps = {
    userInputs:UserInputProps,
    setUserInputs:Dispatch<SetStateAction<UserInputProps>>
    isLoading:boolean,
    handleSubmit:(e: FormEvent<HTMLFormElement>) => Promise<void>
}
type ImageProps = {
    isLoading:boolean;
    imageUrl:string;
}
type ButtonProps = {
    imageUrl:string
    handleShare: (e: React.MouseEvent<HTMLElement>) => Promise<void>
}
type CardParams = {
    id: number,
    tag: string,
    title: string,
    imageUrl: string
    description: string,
    createdAt?: any
}