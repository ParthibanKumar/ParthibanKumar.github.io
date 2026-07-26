// ============================================================
//  PORTFOLIO DATA  —  edit here, or use admin.html to generate
// ------------------------------------------------------------
//  This is the ONLY file you change to add or update content.
// ============================================================

const PROFILE = {
  name: "Parthiban Kumar",
  role: "Data Engineer",
  location: "Mississauga, Ontario",
  tagline: "Eight years moving enterprise data. Now building on the lakehouse.",
  lede: "I design and run production pipelines — batch ingestion, layered transformation, quality controls, and the operational work that keeps feeds landing on time. Retail and logistics at scale before this; building on Azure, Databricks and Delta Lake now.",
  photo: "C:\Users\jpart\Downloads\portfolio\files_2\photo.jpg",
  github: "https://github.com/parthibankumar",
  linkedin: "https://linkedin.com/in/parthibankumar2896",
  email: "jparthibankumar@gmail.com",
  resume: "resume.pdf",
};

const PROJECTS = [
  {
    title: "NYC Taxi Lakehouse",
    status: "live",
    blurb: "End-to-end Azure pipeline over a year of NYC green taxi trips. Data Factory pulls monthly Parquet from the TLC endpoint into ADLS Gen2 via a parameterised ForEach; Databricks applies Medallion layering with PySpark; Delta Lake handles the table format. Access runs through Unity Catalog external locations backed by an Access Connector managed identity — no keys, no secrets in notebooks.",
    stack: ["Azure Data Factory", "ADLS Gen2", "Databricks", "PySpark", "Delta Lake", "Unity Catalog"],
    pipeline: [
      { kind: "Source", name: "NYC TLC", note: "parquet · 12 months", tone: "" },
      { kind: "Orchestration", name: "Data Factory", note: "ForEach · parameterised", tone: "" },
      { kind: "Layer 01", name: "Bronze", note: "raw · immutable", tone: "b" },
      { kind: "Layer 02", name: "Silver", note: "typed · deduplicated", tone: "s" },
      { kind: "Layer 03", name: "Gold", note: "delta · aggregated", tone: "g" }
    ],
    links: [
      { label: "Repository", url: "https://github.com/parthibankumar/nyc-taxi-lakehouse" },
      { label: "Architecture", url: "https://github.com/parthibankumar/nyc-taxi-lakehouse#architecture" }
    ],
  },
  {
    title: "CSV Ingestion Framework",
    status: "live",
    blurb: "Config-driven ingestion in plain Python, separated across configuration, reader and validation modules. Enforces schema, detects nulls and missing columns, and routes rejected records to a quarantine path instead of failing the batch — so bad input is inspectable rather than invisible.",
    stack: ["Python", "pandas", "Data quality"],
    pipeline: [],
    links: [
      { label: "Repository", url: "https://github.com/parthibankumar/csv-ingestion-pipeline" }
    ],
  },
];

const STACK = [
  { group: "Processing", items: "PySpark · Spark SQL · Databricks · Delta Lake · Photon · Medallion architecture" },
  { group: "Cloud", items: "Azure Data Factory · ADLS Gen2 · Unity Catalog · Entra ID · GCP Pub/Sub · AWS S3" },
  { group: "Warehousing", items: "Snowflake · Oracle · Teradata · DB2 · dimensional modelling · SCD handling" },
  { group: "Languages", items: "Python · SQL · PL/SQL · Bash · Korn shell" },
  { group: "Engineering", items: "Git · CI/CD · Azure DevOps · Agile · REST & GraphQL integration" },
  { group: "Legacy depth", items: "Ab Initio GDE · EME · Co>Operating System · Conduct>It · Control Center" },
];

const EXPERIENCE = [
  {
    when: "Dec 2022 — now",
    role: "Consultant · Data Integration Specialist",
    company: "Capgemini UK · Client: John Lewis Partnership",
    blurb: "Design and support production ETL/ELT pipelines moving high-volume retail transactional data through staged raw, transformation and curated layers. Own the operational side end to end — monitoring, root cause analysis, remediation — against SLA-bound business feeds.",
  },
  {
    when: "Jul 2021 — Dec 2022",
    role: "Consultant · Data Integration Engineer",
    company: "Capgemini India · Client: John Lewis Partnership",
    blurb: "Built Snowflake ingestion workflows through staging and target layers, integrated cloud storage pipelines across GCP and AWS S3, and handled multi-format sources — Avro, JSON, CSV, fixed-width — with schema variation across distributed platforms.",
  },
  {
    when: "Sep 2018 — Jul 2021",
    role: "Associate Consultant",
    company: "Atos Syntel · Client: FedEx Corporation",
    blurb: "Built ETL workflows across Oracle, Teradata and DB2 with complex transformations, lookups and slowly changing dimension handling. Developed SQL and PL/SQL for extraction and validation, and integrated REST and GraphQL endpoints into warehouse loads.",
  },
];
