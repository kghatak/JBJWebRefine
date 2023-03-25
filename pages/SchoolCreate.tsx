import {
    Create,
    Box,
    useAutocomplete,
    TextField,
    Autocomplete,
    NumberField
} from "@pankod/refine-mui";
import { useForm, Controller } from "@pankod/refine-react-hook-form";

const SchoolCreate = () => {
    const {
        saveButtonProps,
        refineCore: { formLoading },
        register,
        control,
        formState: { errors },
    } = useForm();

    // const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
    //     resource: "categories",
    // });

    // const { autocompleteProps: userAutocompleteProps } = useAutocomplete({
    //     resource: "user",
    // });

    // const { autocompleteProps: tagsAutocompleteProps } = useAutocomplete({
    //     resource: "tags",
    // });

    // const { autocompleteProps: languageAutocompleteProps } = useAutocomplete({
    //     resource: "languages",
    // });

    return (
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("DISECode", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.DISECode}
                    helperText={(errors as any)?.title?.DISECode}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="DISE Code"
                    name="DISECode"
                />
                <TextField
                    {...register("SchoolName", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.SchoolName}
                    helperText={(errors as any)?.SchoolName?.SchoolName}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="School Name"
                    name="SchoolName"
                />
                <TextField
                    {...register("SchoolPOCName", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.SchoolPOCName}
                    helperText={(errors as any)?.SchoolPOCName?.SchoolPOCName}
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="POC Name"
                    name="SchoolPOCName"
                />
               
                <Controller
                    control={control}
                    name="SchoolType"
                    rules={{ required: "This field is required" }}
                    // eslint-disable-next-line
                    defaultValue={null as any}
                    render={({ field }) => (
                        <Autocomplete
                            //{...categoryAutocompleteProps}
                            {...field}
                            options={['JR.HIGH( Upto Class VII)', 'PRIMARY', 'SSK', 'SEC & HS', 'MADRASHA', 'MSK' ]}
                            onChange={(_, value) => {
                                field.onChange(value);
                            }}
                            
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="School Type"
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: true }}
                                    error={!!(errors as any)?.category?.id}
                                    helperText={
                                        (errors as any)?.category?.id?.message
                                    }
                                    required
                                />
                            )}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="ManagementType"
                    rules={{ required: "This field is required" }}
                    // eslint-disable-next-line
                    defaultValue={null as any}
                    render={({ field }) => (
                        <Autocomplete
                            //{...userAutocompleteProps}
                            {...field}
                            onChange={(_, value) => {
                                field.onChange(value);
                            }}
                            options={['GOVT. SPONSORED', 'PRIVATE', 'GOVT']}
                            // getOptionLabel={(item) => {
                            //     return (
                            //         userAutocompleteProps?.options?.find(
                            //             (p) =>
                            //                 p?.id?.toString() ===
                            //                 item?.id?.toString(),
                            //         )?.title ?? ""
                            //     );
                            // }}
                            // isOptionEqualToValue={(option, value) =>
                            //     value === undefined ||
                            //     option.id.toString() === value?.id?.toString()
                            // }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Management Type"
                                    margin="normal"
                                    InputLabelProps={{ shrink: true }}
                                    variant="outlined"
                                    required
                                />
                            )}
                        />
                    )}
                />
                {/* <NumberField
                    {...register("StudentCount", {
                        required: "This field is required",
                    })}
                    margin="normal"
                    label="Student Count"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    defaultValue={null as any}
                    
                /> */}
                                {/* 
                    DatePicker component is not included in "@pankod/refine-mui" package.
                    To use a <DatePicker> component, you can follow the official documentation for Material UI.
                    
                    Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
                */}
                {/* <TextField
                    {...register("createdAt", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.createdAt}
                    helperText={(errors as any)?.createdAt?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Created At"
                    name="createdAt"
                /> */}

                {/* <Controller
                    control={control}
                    name="Exam"
                    // eslint-disable-next-line
                    defaultValue={[] as any}
                    render={({ field }) => (
                        <Autocomplete
                            {...tagsAutocompleteProps}
                            {...field}
                            multiple
                            onChange={(_, value) => {
                                field.onChange(
                                    value?.map((item: any) => item?.id ?? item),
                                );
                            }}
                            getOptionLabel={(item) => {
                                return (
                                    tagsAutocompleteProps?.options?.find(
                                        (p) =>
                                            p?.id?.toString() ===
                                            (item?.id ?? item)?.toString(),
                                    )?.title ?? ""
                                );
                            }}
                            isOptionEqualToValue={(option, value) =>
                                value === undefined ||
                                option.id.toString() ===
                                    (value?.id ?? value)?.toString()
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Exams"
                                    InputLabelProps={{ shrink: true }}
                                    margin="normal"
                                    variant="outlined"
                                    error={!!(errors as any)?.tags}
                                    helperText={(errors as any)?.tags?.message}
                                    required
                                />
                            )}
                        />
                    )}
                /> */}
                
            </Box>
        </Create>
    );
};

export default SchoolCreate;
