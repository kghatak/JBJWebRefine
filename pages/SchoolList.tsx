import React from "react";
import {
    useDataGrid,
    DataGrid,
    GridColumns,
    EditButton,
    ShowButton,
    DeleteButton,
    List,
    MarkdownField,
    DateField,
    TagField,
    Button,
    ImportButton,
    CreateButton,
    Dialog,
    Box,
} from "@pankod/refine-mui";
import Modal from '@mui/material/Modal';

import { useState } from "react";
import { useMany, useImport, useModal } from "@pankod/refine-core";
import { IStudents } from "src/interfaces/IStudents";
import { PDFLayout } from "@components/pdf/PdfLayout";
import { Cancel } from "@mui/icons-material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const SchoolList = () => {
    /*
    const { dataGridProps } = useDataGrid();

    const { data: categoryData, isLoading: categoryIsLoading } = useMany({
        resource: "categories",
        ids: dataGridProps?.rows?.map((item: any) => item?.category?.id) ?? [],
        queryOptions: {
            enabled: !!dataGridProps?.rows,
        },
    });

    const { data: userData, isLoading: userIsLoading } = useMany({
        resource: "user",
        ids: dataGridProps?.rows?.map((item: any) => item?.user?.id) ?? [],
        queryOptions: {
            enabled: !!dataGridProps?.rows,
        },
    });

    const { data: tagsData, isLoading: tagsIsLoading } = useMany({
        resource: "tags",
        ids: [].concat(
            ...(dataGridProps?.rows?.map((item: any) => item?.tags) ?? []),
        ),
        queryOptions: {
            enabled: !!dataGridProps?.rows,
        },
    });

    const { data: languageData, isLoading: languageIsLoading } = useMany({
        resource: "languages",
        ids: dataGridProps?.rows?.map((item: any) => item?.language) ?? [],
        queryOptions: {
            enabled: !!dataGridProps?.rows,
        },
    });

    const columns = React.useMemo<GridColumns<any>>(
        () => [
            {
                field: "id",
                headerName: "Id",
                type: "number",
                minWidth: 50,
            },
            {
                field: "title",
                headerName: "Title",
                minWidth: 200,
            },
            {
                field: "slug",
                headerName: "Slug",
                minWidth: 200,
            },
            {
                field: "content",
                headerName: "Content",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return (
                        <MarkdownField
                            value={(value ?? "").slice(0, 80) + "..."}
                        />
                    );
                },
            },
            {
                field: "hit",
                headerName: "Hit",
                type: "number",
                minWidth: 200,
            },
            {
                field: "category",
                headerName: "Category",
                valueGetter: ({ row }) => {
                    const value = row?.category?.id;

                    return value;
                },
                minWidth: 300,
                renderCell: function render({ value }) {
                    return categoryIsLoading ? (
                        <>Loading...</>
                    ) : (
                        categoryData?.data?.find((item) => item.id === value)
                            ?.title
                    );
                },
            },
            {
                field: "user",
                headerName: "User",
                valueGetter: ({ row }) => {
                    const value = row?.user?.id;

                    return value;
                },
                minWidth: 300,
            },
            {
                field: "status",
                headerName: "Status",
                minWidth: 200,
            },
            {
                field: "status_color",
                headerName: "Status Color",
                minWidth: 200,
            },
            {
                field: "createdAt",
                headerName: "Created At",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <DateField value={value} />;
                },
            },
            {
                field: "publishedAt",
                headerName: "Published At",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <DateField value={value} />;
                },
            },
            {
                field: "image",
                headerName: "Image",
                minWidth: 100,
                renderCell: function render({ value }) {
                    return (
                        <>
                            {value?.map((item: any, index: number) => (
                                <img
                                    src={item?.url}
                                    key={index}
                                    style={{
                                        height: "50px",
                                        maxWidth: "100px",
                                    }}
                                />
                            ))}
                        </>
                    );
                },
            },
            {
                field: "tags",
                headerName: "Tags",
                minWidth: 300,
                renderCell: function render({ value }) {
                    return tagsIsLoading ? (
                        <>Loading...</>
                    ) : (
                        <>
                            {value?.map((item: any, index: number) => (
                                <TagField
                                    key={index}
                                    value={
                                        tagsData?.data?.find(
                                            (resourceItems) =>
                                                resourceItems.id === item,
                                        )?.title
                                    }
                                />
                            ))}
                        </>
                    );
                },
            },
            {
                field: "language",
                headerName: "Language",
                minWidth: 300,
                renderCell: function render({ value }) {
                    return languageIsLoading ? (
                        <>Loading...</>
                    ) : (
                        languageData?.data?.find((item) => item.id === value)
                            ?.title
                    );
                },
            },
            {
                field: "actions",
                headerName: "Actions",
                renderCell: function render({ row }) {
                    return (
                        <>
                            <EditButton hideText recordItemId={row.id} />
                            <ShowButton hideText recordItemId={row.id} />
                            <DeleteButton hideText recordItemId={row.id} />
                        </>
                    );
                },
                align: "center",
                headerAlign: "center",
                minWidth: 80,
            },
        ],
        [
            categoryData?.data,
            userData?.data,
            tagsData?.data,
            languageData?.data,
        ],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
    */
    const { dataGridProps } = useDataGrid();

    // const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    //     resource: "categories",
    //     ids: dataGridProps?.rows?.map((item: any) => item?.category?.id) ?? [],
    //     queryOptions: {
    //         enabled: !!dataGridProps?.rows,
    //     },
    // });

    const { show, close, visible } = useModal();

    const columns = React.useMemo<GridColumns<any>>(
        () => [
            {
                field: "DISECode",
                headerName: "Id",
                type: "string",
                minWidth: 50,
            },
            {
                field: "SchoolName",
                headerName: "School Name",
                minWidth: 200,
            },
            
            {
                field: "SchoolType",
                headerName: "School Type",
                type: "string",
                minWidth: 150,
            },
            {
                field: "ManagementType",
                headerName: "Management Type",
                type: "string",
                minWidth: 200,
            },
        ],
        [
            //categoryData?.data,
            //userData?.data,
            //tagsData?.data,
            //languageData?.data,
        ],
    );

    const { inputProps, isLoading } = useImport<IPostFile>({
        resourceName: "school",
        mapData: (data) => ({
            ...data,
            category: {
                id: data.DISECode,
            },
            batchSize: 1,
        }),

        onFinish: (result) => {
            // success requests response
            result.succeeded.forEach((item) => {
                console.log(item);
            });
    
            // failed requests response
            result.errored.forEach((item) => {
                console.log(item);
            });
        },

        onProgress: ({ totalAmount, processedAmount }) => {
            // progress percentage
            
            console.log((processedAmount / totalAmount) * 100);
        },

    });

    const exportPDF = () => {
        alert('Export PDF: Selected: ' + selectedRowKeys);
        
        const studentRecord = [ {id:"ddFDFdfsdf", name: "ssdfasdf asdf", schoolName: "yeyuetyutyu"},
                                {id:"ddFDFdfsdf2", name: "ssdfasdf asdf2", schoolName: "yeyuetyutyu2", }
                                ];
        setRecord(studentRecord);
        show();

    }

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(
        [],
    );

    const hasSelected = selectedRowKeys.length > 0;

    const [record, setRecord ] = useState<IStudents[]>();

    return (
        <div>
        <List 
            headerButtons={(
                <>
                    <Button onClick={show}>Upload Bulk</Button>
                    {/* {visible && (
                        <div>
                            <p>Upload Your CSV</p>
                            <ImportButton
                                inputProps={inputProps}
                                loading={isLoading} 
                                hideText={false}
                            />
                            <Button onClick={close}>Close</Button>
                        </div>
                    )} */}
                    <Button onClick = {exportPDF} >Generate PDF</Button>
                    <CreateButton  />
                    <ShowButton/>
                </>
            )}
        >
            <DataGrid 
                getRowId={(row) => row.DISECode} 
                {...dataGridProps} 
                columns={columns} 
                autoHeight 
                checkboxSelection
                density="comfortable"
                onSelectionModelChange={(newSelectionModel) => {
                        setSelectedRowKeys(newSelectionModel as React.Key[]);
                    }}
                selectionModel={selectedRowKeys}
            />

        
        </List>
        {visible && (
            <Box sx={style}>
                
                <Button onClick={close}>Close</Button>    
                <PDFLayout records={record} />
            </Box>        
        )}
        </div>

      )
};

export default SchoolList;

interface IPostFile {
    SchoolName: string;
    DISECode: string;
    SchoolType: string;
    ManagementType: string
}
