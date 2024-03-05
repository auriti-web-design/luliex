import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const propType = [
    {
        id: "immobili di lusso",
        label: "Immobili di lusso",
    },
    {
        id: "dimore storiche",
        label: "Dimore Storiche",
    },
    {
        id: "hotel",
        label: "Hotel",
    },
    {
        id: "resort",
        label: "Resort",
    },
    {
        id: "cantine vitivinicole",
        label: "Cantine Vitivinicole",
    },
    {
        id: "agriturisimi",
        label: "Agriturismi",
    },
] as const


const formSchema = z.object({
    completeName: z.string(),
    city: z.string(),
    companyAddress: z.string(),
    companyPhone: z.string(),
    emailAddress: z.string().email(),
    password: z.string().min(12),
    passwordConfirm: z.string(),
    linkedinOrInsLink: z.string(),
    businessTurnover: z.enum(["Less than 100k", "Between 100k and 300k", "Between 300k and 500k", "More 500k"]),
    averageValue: z.enum(["From 0 to 1 mln", "From 1 mln to 5 mln", "More than 5 mln"]),
    commissionPercentage: z.number().min(0).max(100).default(0),
    agencyLogo: z.string(),
    teamPhoto: z.string(),
    moreCompanyTime: z.string(),
    possVideoCall: z.string(),
    possBookApp: z.string(),
    moreThan100Prop: z.string(),
    wtpCont: z.string(),
    sentRelevantWtp: z.string(),

    propType: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),

    accountType: z.enum(["personal", "company"]),
    companyName: z.string(),
    belongFranchise: z.enum(["Yes", "No"]),
    oneMoreLocation: z.enum(["Yes", "No"]),

    lanEng: z.enum(["Yes", "No"], {
        required_error: "You need to select a notification type.",
    }),

    teamNumPeople: z.enum(["Less than 3", "Between 3 and 5", "Between 5 and 10", "More than 10"]),

    shortDescription: z.string()
        .min(10, {
            message: "Description must be at least 10 characters.",
        })
        .max(160, {
            message: "Description must not be longer than 30 characters.",
        })

}).refine((data) => {
        return data.password === data.passwordConfirm
    },
    {
        message: "Password do not match",
        path: ["passwordConfirm"]
    })


export default function CompanyName() {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            completeName: "",
            companyAddress: "",
            companyPhone: "",
            emailAddress: "",
            password: "",
            passwordConfirm: "",
            companyName: "",
            agencyLogo: "",
            propType: [],
        }
    });

    const accountType = form.watch("accountType");

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log({ values });
    }

    return(
        <>

            <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => {
                    return <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                            <Input
                                placeholder="Type company name"
                                {...field}
                                className="rounded-none"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}
            />
        </>
    )
}