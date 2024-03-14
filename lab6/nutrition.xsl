<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
        <html>
            <head>
                <title>Grandma White's Cookies Nutrition Facts</title>
                <style>
                    table {
                        border-collapse: collapse;
                        width: 100%;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Grandma White's Cookies Nutrition Facts</h1>
                <table>
                    <tr>
                        <th>Nutrition Fact</th>
                        <th>Amount</th>
                    </tr>
                    <xsl:apply-templates select="nutrition/product/*"/>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="nutrition/product/*">
        <tr>
            <td><xsl:value-of select="local-name()"/></td>
            <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>

</xsl:stylesheet>
