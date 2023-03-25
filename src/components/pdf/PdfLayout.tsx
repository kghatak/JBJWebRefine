import { useRef } from "react";
import {
    Document,
    Image,
    PDFViewer,
    Page,
    StyleSheet,
    View,
    Text
} from '@react-pdf/renderer'

import {IStudents} from '../../interfaces/IStudents';

type PdfProps = {
    records: IStudents[] | undefined;
}

export const PDFLayout: React.FC<PdfProps> = ({records}) => {
    return( 
        <PDFViewer style={styles.viewer}>
            <Document>
                {records?.map((item) => {
                    return(
                        <Page style={styles.page} size="A4">
                        <View>
                                <Image
                                    src="/plogo.png"
                                    style={{ width: "120px", height: "120px" }}
                                />
                                
                                <View style={styles.inoviceTextNumberContainer}>
                                    <Text style={styles.inoviceText}>
                                        {`Invoice: Invoice_#${item?.id}${item?.name}`}
                                    </Text>
                                    <Text
                                        style={styles.inoviceId}
                                    >{`Invoice ID: INVOICE_#${item?.id}`}</Text>
                                </View>
                            </View>
                            <View style={styles.dividerLG} />
                        </Page>
                    );
                })};
                
            </Document>
        </PDFViewer>
    );
}


const styles = StyleSheet.create({
    viewer: {
        paddingTop: 16,
        width: "100%",
        height: "80%",
        border: "none",
    },
    page: {
        display: "flex",
        padding: "0.4in 0.4in",
        fontSize: 12,
        color: "#333",
        backgroundColor: "#fff",
    },
    inoviceTextNumberContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    inoviceText: {
        color: "#3aabf0",
    },
    inoviceId: {
        textAlign: "center",
    },
    inoviceForFromCotnainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inoviceForFromTitle: {
        marginBottom: 24,
    },
    inoviceFor: {
        flex: 1.5,
    },
    inoviceFrom: {
        flex: 1,
    },
    inoviceForFromText: {
        color: "#787878",
        lineHeight: 1.5,
    },
    dividerSM: {
        width: "100%",
        height: 1,
        marginTop: 12,
        marginBottom: 12,
        backgroundColor: "#e5e5e5",
    },
    dividerLG: {
        width: "100%",
        height: 1,
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: "#e5e5e5",
    },
    table: {
        marginTop: 32,
    },
    tableHeader: {
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
    },
    tableHeaderItem: {
        paddingVertical: 8,
        border: "1px solid #000",
        borderBottom: "none",
    },
    tableRow: {
        display: "flex",
        flexDirection: "row",
    },
    tableCol: {
        paddingVertical: 8,
        paddingHorizontal: 4,
        border: "1px solid #000",
    },
    signatureTotalContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32,
    },
    signatureContainer: {},
    totalContainer: {},
    signatureText: {
        marginTop: 32,
    },
    totalText: {
        marginTop: 16,
    },
    footer: {
        borderTop: "1px solid #e5e5e5",
        paddingTop: 8,
        marginTop: "auto",
    },
    footerText: {
        color: "#787878",
        lineHeight: 1.5,
    },
});
