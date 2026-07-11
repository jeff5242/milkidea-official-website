type JsonLdProps = {
  data: Record<string, unknown>
}

/**
 * 通用 JSON-LD 結構化資料輸出元件。
 * 用法：<JsonLd data={organizationJsonLd} />
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD 需要以字串注入 <script>，資料來源為站內固定常數，非使用者輸入，故此處安全。
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
